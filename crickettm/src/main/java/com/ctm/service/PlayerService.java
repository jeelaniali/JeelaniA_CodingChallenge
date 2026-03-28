package com.ctm.service;

import java.util.List;
import com.ctm.entity.Player;

public interface PlayerService {

    Player createPlayer(Player player);

    List<Player> getAllPlayers();

    Player getPlayerById(Long id);

    Player updatePlayer(Long id, Player player);

    void deletePlayer(Long id);
    
    List<Player> getPlayersByTeamName(String teamName);
}