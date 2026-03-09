package com.ctm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ctm.entity.Player;

public interface PlayerRepository extends JpaRepository<Player, Long> {

}