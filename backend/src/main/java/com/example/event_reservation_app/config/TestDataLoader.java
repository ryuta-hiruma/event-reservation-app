package com.example.event_reservation_app.config;

import com.example.event_reservation_app.entity.Event;
import com.example.event_reservation_app.repository.EventRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDateTime;

@Configuration
public class TestDataLoader {

    @Bean
    public ApplicationRunner dataLoader(EventRepository eventRepository) {
        return args -> {
            Event event = new Event();
            event.setTitle("テストイベント");
            event.setDate(LocalDateTime.now().plusDays(1));
            eventRepository.save(event);

            eventRepository.findAll().forEach(e ->
                    System.out.println("登録イベント: " + e.getTitle() + " / " + e.getDate())
            );
        };
    }
}
