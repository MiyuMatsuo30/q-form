import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import InsertPhotoTwoToneIcon from '@mui/icons-material/InsertPhotoTwoTone';
import { useMemo, useState } from "react";
import { AppProvider, DashboardLayout } from '@toolpad/core';
import type { Navigation, Router } from '@toolpad/core';
import { createTheme } from '@mui/material/styles';
import Page2 from './Page2';
import { Page3 } from './Page3';


const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'ページ',
    },
    {
        segment: 'Page2',
        title: 'word',
        icon: <MenuBookTwoToneIcon />,
    },
    {
        segment: 'Page3',
        title: 'photo',
        icon: <InsertPhotoTwoToneIcon />
    },
]

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function DemoPageContent({ pathname }: { pathname: string }) {
    switch (pathname) {
        case "/Page2":
            return(
                <Page2 />
            )
        case "/Page3":
            return (
                <Page3 />
            )
        default:
            break;
    }
}

interface DemoProps {
    window?: () => Window;
}

const Home = (props: DemoProps) => {
    const { window } = props;
    const [pathname, setPathname] = useState('/');
    const router = useMemo<Router>(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    const demoWindow = window !== undefined ? window() : undefined;
    
    return (
        <AppProvider
            branding={{logo:"", title:"辞書"}}
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout>
                <DemoPageContent pathname={pathname} />
            </DashboardLayout>
        </AppProvider>
    );
}

export default Home;