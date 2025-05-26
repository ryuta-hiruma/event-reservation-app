package com.example.event_reservation_app.service;

import com.example.event_reservation_app.entity.Event;
import com.example.event_reservation_app.form.EventForm;
import com.example.event_reservation_app.repository.EventRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.util.List;

@Service
public class EventService {

    private final EventRepository eventRepository;

    // コンストラクタインジェクション
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    // 一覧取得
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    // 新規作成
    public Event createEvent(EventForm form) {
        Event event = new Event();

        event.setTitle(form.getTitle());

        System.out.println("受け取った日付文字列: " + form.getDate());

        // 日付の文字列を LocalDateTime に変換
        OffsetDateTime offsetDateTime = OffsetDateTime.parse(form.getDate());
        LocalDateTime localDateTime = offsetDateTime.atZoneSameInstant(ZoneId.of("Asia/Tokyo")).toLocalDateTime();
        event.setDate(localDateTime);

        return eventRepository.save(event);
    }
}
