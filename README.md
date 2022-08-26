#

## 설치한 패키지

$ yarn creat react-app '프로젝트명'
$ yarn add axios

## 트러블 슈팅

axios로 통신할 때 useState로 loading을 상태관리 하였는데 async함수가 시작할 때 setLoading을 true로 바꾸고 마지막에 false로 바꾸지 않아 계속 '대기중...'이 떴음.
