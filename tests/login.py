import requests
import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
ENV_FILE = BASE_DIR.parent / "environments" / "homolog.json"

with open(ENV_FILE, 'r', encoding='utf-8') as f:
    config = json.load(f)

identity_url = config['identityUrl']
client_id = config['clientId']
email = config['email']
password = config['password']

def login():
    login_url = f"{identity_url}users/login"
    print(f"Tentando login em: {login_url} com o usuário: {email}")

    login_payload = {
        "email": email,
        "password": password,
        "clientAppId": client_id,
        "responseType": "token",
    }

    headers = {
        "Content-Type": "application/json"
    }

    try:
        login_res = requests.post(login_url, json=login_payload, headers=headers)
        if login_res.status_code == 200:
            data = login_res.json()
            access_token = data.get("resultData", {}).get("accessToken")
            if access_token:
                return access_token
            else:
                print("Login falhou. Token não encontrado na resposta.")
        else:
            print(f"Login falhou. Status: {login_res.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"Ocorreu um erro na requisição: {e}")
    return None

def update_homolog_json(token: str):
    with open(ENV_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    data["token"] = token 

    with open(ENV_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Token atualizado em {ENV_FILE}")

def main():
    print("➡️ Rodando login.py para obter o token...")
    token = login()
    if token:
        print(f"✅ accessToken capturado")
        update_homolog_json(token)
    else:
        print("⚠️ Falha ao capturar o accessToken.")