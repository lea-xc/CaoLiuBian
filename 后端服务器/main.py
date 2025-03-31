from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import httpx

app = FastAPI()

# 你的微信小程序的AppID和AppSecret
APP_ID = '	wx7b3d44b28fe1fb0f'
APP_SECRET = '151130ccdd3f3fbd5812aacdbd0c51ba'

# 微信登录API URL
WX_LOGIN_URL = 'https://api.weixin.qq.com/sns/jscode2session'

class LoginRequest(BaseModel):
    code: str

@app.post("/login/")
async def login(request: LoginRequest):
    # 使用微信提供的API来换取openid和session_key
    params = {
        'appid': APP_ID,
        'secret': APP_SECRET,
        'js_code': request.code,
        'grant_type': 'authorization_code'
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(WX_LOGIN_URL, params=params)
        data = response.json()

    if "errcode" in data:
        # 登录失败，微信服务器返回错误
        raise HTTPException(status_code=400, detail=data.get("errmsg"))

    # 登录成功，返回openid和session_key
    return {
        "openid": data.get("openid"),
        "session_key": data.get("session_key")
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
