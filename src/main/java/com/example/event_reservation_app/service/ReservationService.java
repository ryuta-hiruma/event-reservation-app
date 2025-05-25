package com.example.event_reservation_app.service;

import com.example.event_reservation_app.entity.Event;
import com.example.event_reservation_app.entity.Reservation;
import com.example.event_reservation_app.entity.User;
import com.example.event_reservation_app.form.ReservationForm;
import com.example.event_reservation_app.repository.EventRepository;
import com.example.event_reservation_app.repository.ReservationRepository;
import com.example.event_reservation_app.repository.UserRepository;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final UserRepository userRepository;
    private final EventRepository eventRepository;

    // コンストラクタインジェクション
    public ReservationService(
            ReservationRepository reservationRepository,
            UserRepository userRepository,
            EventRepository eventRepository) {
        this.reservationRepository = reservationRepository;
        this.userRepository = userRepository;
        this.eventRepository = eventRepository;
    }

    public Reservation createReservation(ReservationForm form) {
        User user = userRepository.findById(form.getUserId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "指定されたユーザーが存在しません"));

        Event event = eventRepository.findById(form.getEventId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "指定されたイベントが存在しません"));

        Reservation reservation = new Reservation();
        reservation.setUser(user);
        reservation.setEvent(event);
        reservation.setReservedAt(LocalDateTime.now());

        return reservationRepository.save(reservation);
    }

    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

}
