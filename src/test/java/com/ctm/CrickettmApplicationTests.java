package com.ctm;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.ctm.entity.Player;

@SpringBootTest
class CrickettmApplicationTests {

    @Test
    void contextLoads() {
    }

    @Test
    void testPlayerName() {

        Player player = new Player();
        player.setPlayerName("Dhoni");

        assertEquals("Dhoni", player.getPlayerName());
    }
    
    @Test
    void testJerseyNumber(){

        Player player = new Player();

        player.setJerseyNumber(18);

        assertEquals(18, player.getJerseyNumber());

    }

}