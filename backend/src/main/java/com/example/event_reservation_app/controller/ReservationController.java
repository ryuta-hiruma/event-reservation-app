package com.example.event_reservation_app.controller;

import com.example.event_reservation_app.entity.Reservation;
import com.example.event_reservation_app.form.ReservationForm;
import com.example.event_reservation_app.service.ReservationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    // 予約登録（POST）
    @PostMapping
    public Reservation createReservation(@RequestBody @Valid ReservationForm form) {
        return reservationService.createReservation(form);
    }

    // 予約一覧取得（GET）
    @GetMapping
    public List<Reservation> getAllReservations() {
        return reservationService.getAllReservations();
    }
}
