package com.ctm.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ctm.entity.Player;

public interface PlayerRepository extends JpaRepository<Player, Long> {
	
	List<Player> findByTeamName(String teamName);

}