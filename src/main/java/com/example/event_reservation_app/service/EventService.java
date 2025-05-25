package com.example.event_reservation_app.service;

import com.example.event_reservation_app.entity.Event;
import com.example.event_reservation_app.form.EventForm;
import com.example.event_reservation_app.repository.EventRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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

        // 日付の文字列を LocalDateTime に変換
        LocalDateTime parsedDate = LocalDateTime.parse(form.getDate(), DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        event.setDate(parsedDate);

        return eventRepository.save(event);
    }
}
