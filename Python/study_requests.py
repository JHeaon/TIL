import requests


# GET 요청
response = requests.get('https://www.naver.com/')

print(response.text) # html 본문을 받아 올 수 있다.
print(response.status_code) # 상태 코드
# print(response.json()) # json 형태가 없을 시 requests.exceptions.JSONDecodeError 에러 발생
print(dict(response.cookies)) # 쿠키 정보

# GET 요청시 쿼리 스트링을 파라미터로 보낼 수 있다.
# payload = {'key1': 'value1', 'key2': 'value2'}
# r = requests.get('https://httpbin.org/get', params=payload)

# POST 요청시 바디에 데이터를 담아 보낼 수 있다.
# payload = {'key1': 'value1', 'key2': 'value2'}
# r = requests.post('https://httpbin.org/post', data=payload)

# session 사용

with requests.Session() as session:
    response = session.get('https://www.naver.com/')
    print(session.cookies.get_dict())