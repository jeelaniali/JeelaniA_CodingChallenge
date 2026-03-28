package com.ctm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ctm.entity.Player;
import com.ctm.repository.PlayerRepository;
import com.ctm.exception.PlayerNotFoundException;

@Service
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    private PlayerRepository repository;

    @Override
    public Player createPlayer(Player player) {
        return repository.save(player);
    }

    @Override
    public List<Player> getAllPlayers() {
        return repository.findAll();
    }

    @Override
    public Player getPlayerById(Long id) {

        return repository.findById(id)
        		.orElseThrow(() -> new PlayerNotFoundException("Player not found with id: " + id));

    }

    @Override
    public Player updatePlayer(Long id, Player player) {

        Player existing = repository.findById(id)
                .orElseThrow(() -> new PlayerNotFoundException("Player not found with id: " + id));

        existing.setPlayerName(player.getPlayerName());
        
        existing.setJerseyNumber(player.getJerseyNumber());
        existing.setRole(player.getRole());
        existing.setTotalMatches(player.getTotalMatches());
        
        existing.setTeamName(player.getTeamName());
        
        existing.setCountryState(player.getCountryState());
        existing.setDescription(player.getDescription());

        return repository.save(existing);
    }

    @Override
    public void deletePlayer(Long id) {

        Player existing = repository.findById(id)
                .orElseThrow(() -> new PlayerNotFoundException("Player not found with id: " + id));

        repository.delete(existing);
    }
    
    @Override
    public List<Player> getPlayersByTeamName(String teamName) {

        List<Player> players = repository.findByTeamName(teamName);

        if(players.isEmpty()){
                throw new PlayerNotFoundException("No players found for team: " + teamName);
        }

                            return players;
    }
    
    
}