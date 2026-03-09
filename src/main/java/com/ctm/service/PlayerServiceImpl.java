package com.ctm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ctm.entity.Player;
import com.ctm.repository.PlayerRepository;

@Service
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    private PlayerRepository repository;

    public Player createPlayer(Player player) {
        return repository.save(player);
    }

    public List<Player> getAllPlayers() {
        return repository.findAll();
    }

    public Player getPlayerById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Player updatePlayer(Long id, Player player) {
        Player existing = repository.findById(id).orElse(null);

        existing.setPlayerName(player.getPlayerName());
        existing.setJerseyNumber(player.getJerseyNumber());
        existing.setRole(player.getRole());

        return repository.save(existing);
    }

    public void deletePlayer(Long id) {
        repository.deleteById(id);
    }
}