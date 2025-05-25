package com.example.event_reservation_app.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "events")

public class Event {
    @Id // 主キー（Primary Key）
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 自動採番
    private Long id;

    @Column(nullable = false) // null禁止
    private String title;

    @Column(name = "event_date") // カラム名を明示
    private LocalDateTime date;

    public Event() {
        // デフォルトコンストラクタ（JPA用）
    }

    // --- Getter & Setter ---
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
