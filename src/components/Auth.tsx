import React, { Fragment, useState } from "react";
import { auth } from "../main";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import { Box, Button, Container, Grid, TextField } from "@mui/material";

const Auth: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    // const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const navigate = useNavigate()
    const [canLogin, setCanLogin] = useState<boolean>(false);
    const Register = async () => {
        if (typeof email === "string" && typeof password === "string") {
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate("/Home");
            })
            .catch(() => {
                
            });
        } else {
            alert("入力してください");
        }
    };

    const Login = async () => {
        if (typeof email === "string" && typeof password === "string") {
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate("/Home");
            })
            .catch(() => {
                setCanLogin(true);
            });
        } else {
            alert("入力してください");
        }
    };

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    };
    return (
        <Fragment>
            <Container className="flex-none">
                <Grid container>
                <Grid item md={3}></Grid>
                <Grid item md={6} className="flex-none">
                    <h2>{isLogin ? "新規登録" : "ログイン"}</h2>
                    <Box component="form">
                    <TextField
                        style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                        name="email"
                        label="メールアドレス"
                        size="medium"
                        fullWidth
                        error={email!==undefined && !regex.test(email)}
                        helperText={email!==undefined && !regex.test(email) ? "正しい形式で入力してください" : ""}
                        variant="outlined"
                        value={email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        handleChangeEmail(event);
                        }}
                    />
                    <TextField
                        style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                        name="password"
                        label="パスワード"
                        size="medium"
                        fullWidth
                        error={password!==undefined && password.length<6}
                        helperText={password!==undefined && password.length<6 ? "6文字以上入力してください" : ""}
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        handleChangePassword(event);
                        }}
                    />
                    <Grid container>
                        <Grid item>
                            <p style={{color: '#dc143c'}}>{canLogin && "メールアドレスまたはパスワードが正しくありません"}</p>
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        disabled={password===undefined || password.length<6 || email===undefined || !regex.test(email)}
                        style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                        onClick={isLogin ? Register : Login}
                    >
                        {isLogin ? "新規登録" : "ログイン"}
                    </Button>
                    <Grid container>
                        <Grid item>
                            {isLogin ? "すでにアカウントをお持ちですか？　" : "アカウントをお持ちでないですか？　"}
                            <span style={{ color: 'rgb(0, 112, 210)', cursor: 'pointer' }} onClick={() => setIsLogin(!isLogin)}>
                                {isLogin ? "ログイン" : "新規登録"}
                            </span>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item md={3}></Grid>
            </Grid>
        </Container>
        </Fragment>
    );
};

export default Auth;
