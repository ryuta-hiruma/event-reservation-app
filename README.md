# Event Reservation App

## 使用技術
- Spring Boot + PostgreSQL + React
- Docker Compose による環境構築

## セットアップ手順（ローカル）

1. `.env` ファイルを作成（例）
   POSTGRES_DB=eventdb
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=password

2. Docker Compose で起動
   docker-compose up --build

3. アプリが起動したら `http://localhost:8080` でアクセス