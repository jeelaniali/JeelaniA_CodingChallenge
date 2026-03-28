import React, { useState } from "react";
import { addPlayer } from "./PlayerServices";

const AddPlayerForm = ({ loadPlayers }) => {

  const [player, setPlayer] = useState({
    playerName: "",
    jerseyNumber: "",
    role: "",
    teamName: "",
    stateName: "",
    totalMatches: "",
    descriptionOfPlayer: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPlayer({
      ...player,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      playerName: player.playerName,
      jerseyNumber: Number(player.jerseyNumber),
      role: player.role,
      teamName: player.teamName,
      countryState: player.stateName || "India",
      totalMatches: Number(player.totalMatches) || 0,
      description: player.descriptionOfPlayer || ""
    };

    addPlayer(payload)
      .then(() => {
        loadPlayers();
        setPlayer({
          playerName: "",
          jerseyNumber: "",
          role: "",
          teamName: "",
          stateName: "",
          totalMatches: "",
          descriptionOfPlayer: ""
        });
      })
      .catch(err => console.log(err.response?.data));
  };

  return (
    <form onSubmit={handleSubmit}>

      

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>

        <input name="playerName" placeholder="Name"
          value={player.playerName} onChange={handleChange}
          style={{ padding: "5px", border: "1px solid #ccc" }} />

        <input name="jerseyNumber" type="number" placeholder="Jersey"
          value={player.jerseyNumber} onChange={handleChange}
          style={{ padding: "5px", border: "1px solid #ccc" }} />

        <select name="role"
          value={player.role} onChange={handleChange}
          style={{ padding: "5px", border: "1px solid #ccc" }}>
          <option value="">Role</option>
          <option value="Batsman">Batsman</option>
          <option value="Bowler">Bowler</option>
          <option value="Allrounder">Allrounder</option>
          <option value="Wicketkeeper">Wicketkeeper</option>
        </select>

        <input name="teamName" placeholder="Team"
          value={player.teamName} onChange={handleChange}
          style={{ padding: "5px", border: "1px solid #ccc" }} />

        <input name="stateName" placeholder="State"
          value={player.stateName} onChange={handleChange}
          style={{ padding: "5px", border: "1px solid #ccc" }} />

        <input name="totalMatches" type="number" placeholder="Matches"
          value={player.totalMatches} onChange={handleChange}
          style={{ padding: "5px", border: "1px solid #ccc" }} />

        <input name="descriptionOfPlayer" placeholder="Description"
          value={player.descriptionOfPlayer} onChange={handleChange}
          style={{ padding: "5px", border: "1px solid #ccc", width: "200px" }} />

      </div>

      <button
        type="submit"
        style={{
          marginTop: "10px",
          backgroundColor: "#5cb85c",
          border: "none",
          padding: "6px 12px",
          color: "white",
          cursor: "pointer"
        }}
      >
        Add
      </button>

    </form>
  );
};

export default AddPlayerForm;