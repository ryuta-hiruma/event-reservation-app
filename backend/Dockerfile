# Java 17ベース（JDK入り）
FROM openjdk:17-jdk-slim

# 作業ディレクトリ作成
WORKDIR /app

# jarファイルコピー（事前に mvn clean package しておく）
COPY target/event-reservation-app-0.0.1-SNAPSHOT.jar app.jar

# アプリ起動
ENTRYPOINT ["java", "-jar", "app.jar"]