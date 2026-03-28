import React, { useState, useEffect } from "react";
import { updatePlayer } from "./PlayerServices";

const UpdatePlayerForm = ({ player, loadPlayers, clearEdit }) => {

  const [updatedPlayer, setUpdatedPlayer] = useState(player);

  useEffect(() => {
    setUpdatedPlayer(player);
  }, [player]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdatedPlayer({
      ...updatedPlayer,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      playerName: updatedPlayer.playerName,
      jerseyNumber: Number(updatedPlayer.jerseyNumber),
      role: updatedPlayer.role,
      teamName: updatedPlayer.teamName,
      countryState: updatedPlayer.countryState || "India",
      totalMatches: Number(updatedPlayer.totalMatches) || 0,
      description: updatedPlayer.description || ""
    };

    updatePlayer(updatedPlayer.playerId, payload)
      .then(() => {
        loadPlayers();
        clearEdit();
      })
      .catch(err => console.log(err.response?.data));
  };

  return (
    <form onSubmit={handleSubmit}>

      <h3 style={{ marginBottom: "10px" }}>Update Player</h3>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>

        <input name="playerName"
          value={updatedPlayer.playerName || ""}
          onChange={handleChange}
          style={{ padding: "5px", border: "1px solid #ccc" }} />

        <input name="jerseyNumber" type="number"
          value={updatedPlayer.jerseyNumber || ""}
          onChange={handleChange}
          style={{ padding: "5px", border: "1px solid #ccc" }} />

        <select name="role"
          value={updatedPlayer.role || ""}
          onChange={handleChange}
          style={{ padding: "5px", border: "1px solid #ccc" }}>
          <option value="Batsman">Batsman</option>
          <option value="Bowler">Bowler</option>
          <option value="Allrounder">Allrounder</option>
          <option value="Wicketkeeper">Wicketkeeper</option>
        </select>

        <input name="teamName"
          value={updatedPlayer.teamName || ""}
          onChange={handleChange}
          style={{ padding: "5px", border: "1px solid #ccc" }} />

        <input name="countryState"
          value={updatedPlayer.countryState || ""}
          onChange={handleChange}
          style={{ padding: "5px", border: "1px solid #ccc" }} />

        <input name="totalMatches" type="number"
          value={updatedPlayer.totalMatches || ""}
          onChange={handleChange}
          style={{ padding: "5px", border: "1px solid #ccc" }} />

        <input name="description"
          value={updatedPlayer.description || ""}
          onChange={handleChange}
          style={{ padding: "5px", border: "1px solid #ccc", width: "200px" }} />

      </div>

      <button
        type="submit"
        style={{
          marginTop: "10px",
          backgroundColor: "#f0ad4e",
          border: "none",
          padding: "6px 12px",
          cursor: "pointer"
        }}
      >
        Update
      </button>

      <button
        type="button"
        onClick={clearEdit}
        style={{
          marginTop: "10px",
          marginLeft: "10px",
          padding: "6px 12px",
          cursor: "pointer"
        }}
      >
        Cancel
      </button>

    </form>
  );
};

export default UpdatePlayerForm;