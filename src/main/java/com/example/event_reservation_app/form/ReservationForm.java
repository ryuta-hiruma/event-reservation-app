package com.example.event_reservation_app.form;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public class ReservationForm {
    @NotNull(message = "ユーザーIDは必須です")
    @Positive(message = "ユーザーIDは正の数である必要があります")
    private Long userId;

    @NotNull(message = "イベントIDは必須です")
    @Positive(message = "イベントIDは正の数である必要があります")
    private Long eventId;

    // --- Getter / Setter ---
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }
}
