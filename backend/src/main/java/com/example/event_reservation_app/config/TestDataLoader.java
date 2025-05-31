package com.example.event_reservation_app.config;

import com.example.event_reservation_app.entity.Event;
import com.example.event_reservation_app.entity.User;
import com.example.event_reservation_app.repository.EventRepository;
import com.example.event_reservation_app.repository.UserRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDateTime;

@Configuration
public class TestDataLoader {

    @Bean
    public ApplicationRunner dataLoader(EventRepository eventRepository, UserRepository userRepository) {
        return args -> {
            // ユーザーを複数登録（nameとemailをセット）
            User user1 = new User();
            user1.setName("山田 花子");
            user1.setEmail("hanako.yamada@example.com");
            userRepository.save(user1);

            User user2 = new User();
            user2.setName("佐藤 太郎");
            user2.setEmail("taro.sato@example.com");
            userRepository.save(user2);

            // イベントを複数登録
            Event event1 = new Event();
            event1.setTitle("テストイベント1");
            event1.setDate(LocalDateTime.now().plusDays(1));
            eventRepository.save(event1);

            Event event2 = new Event();
            event2.setTitle("テストイベント2");
            event2.setDate(LocalDateTime.now().plusDays(3));
            eventRepository.save(event2);

            // 登録済みユーザーの一覧表示
            userRepository.findAll().forEach(u ->
                    System.out.println("登録ユーザー: " + u.getName() + " / " + u.getEmail())
            );

            // 登録済みイベントの一覧表示
            eventRepository.findAll().forEach(e ->
                    System.out.println("登録イベント: " + e.getTitle() + " / " + e.getDate())
            );
        };
    }
}
