package com.example.event_reservation_app.form;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class EventForm {

    @NotBlank(message = "タイトルは必須です")
    @Size(max = 100, message = "タイトルは100文字以内で入力してください")
    private String title;

    @NotBlank(message = "日付は必須です")
    private String date; // LocalDateTimeではなく文字列で一旦受け取る

    // --- Getter & Setter ---
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
