import http.client

conn = http.client.HTTPSConnection("wordsapivi.p.rapidapi.com")

headers = {
    'x-rapidapi-key': "ce19d0164fmsh3d383efc0e85ce5p16dcb1jsnb1a4a3c79541",
    'x-rapidapi-host': "wordsapiv1.p.rapidapi.com"
}

conn.request("GET", "/words/%7Bword%7D", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))