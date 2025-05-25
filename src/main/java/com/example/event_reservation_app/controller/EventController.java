package com.example.event_reservation_app.controller;

import com.example.event_reservation_app.entity.Event;
import com.example.event_reservation_app.form.EventForm;
import com.example.event_reservation_app.service.EventService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/events") // ← 共通のパスプレフィックス
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    // GET /events
    @GetMapping
    public List<Event> listEvents() {
        return eventService.getAllEvents();
    }

    // POST /events
    @PostMapping
    public Event createEvent(@RequestBody @Valid EventForm form) {
        return eventService.createEvent(form); // Service層でEventに変換して保存
    }
}
