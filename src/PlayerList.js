import React, { useEffect, useState } from "react";
import {
  getAllPlayers,
  deletePlayer,
  getPlayersByTeam
} from "./PlayerServices";

import AddPlayerForm from "./AddPlayerForm";
import UpdatePlayerForm from "./UpdatePlayerForm";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  const [editPlayer, setEditPlayer] = useState(null);

  const [teamName, setTeamName] = useState("");
  const [searchedPlayers, setSearchedPlayers] = useState([]);

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = () => {
    getAllPlayers().then((res) => setPlayers(res.data));
  };

  const handleDelete = (id) => {
    deletePlayer(id).then(() => loadPlayers());
  };

  const handleEdit = (player) => {
    setEditPlayer(player);
  };

  const handleSearch = () => {
    if (!teamName) {
      alert("Enter team name");
      return;
    }

    getPlayersByTeam(teamName.trim())
      .then((res) => setSearchedPlayers(res.data))
      .catch(() => setSearchedPlayers([]));
  };

  return (
    <div style={{ width: "85%", margin: "auto", backgroundColor: "#f7f7f7", padding: "10px" }}>

      {/* HEADER */}
      <div style={{ textAlign: "center", margin: "20px 0", color: "#2c3e50" }}>
        <h2>Cricket Team Management</h2>
      </div>

      {/* ADD PLAYER */}
      <div style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "20px",
        backgroundColor: "#ffffff"
      }}>
        <h3>Add Player</h3>
        <AddPlayerForm loadPlayers={loadPlayers} />
      </div>

      {/* UPDATE PLAYER */}
      {editPlayer && (
        <div style={{
          border: "1px solid #ccc",
          padding: "15px",
          marginBottom: "20px",
          backgroundColor: "#ffffff"
        }}>
          <h3>Update Player</h3>
          <UpdatePlayerForm
            player={editPlayer}
            loadPlayers={loadPlayers}
            clearEdit={() => setEditPlayer(null)}
          />
        </div>
      )}

      {/* SEARCH */}
      <div style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "20px",
        backgroundColor: "#ffffff"
      }}>
        <h3>Search by Team Name</h3>

        <input
          type="text"
          placeholder="Enter team name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          style={{ padding: "5px", border: "1px solid #ccc" }}
        />

        <button
          onClick={handleSearch}
          style={{
            backgroundColor: "#337ab7",
            color: "white",
            border: "none",
            padding: "5px 10px",
            marginLeft: "10px",
            cursor: "pointer"
          }}
        >
          Search
        </button>

        <button
          onClick={() => {
            setTeamName("");
            setSearchedPlayers([]);
          }}
          style={{
            backgroundColor: "#999",
            color: "white",
            border: "none",
            padding: "5px 10px",
            marginLeft: "10px",
            cursor: "pointer"
          }}
        >
          Clear
        </button>
      </div>

      {/* SEARCH RESULTS */}
      {searchedPlayers.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h4>Results</h4>

          <table border="1" width="100%" cellPadding="6">
            <thead>
              <tr style={{ backgroundColor: "#dfe6ed" }}>
                <th>ID</th>
                <th>Name</th>
                <th>Jersey</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {searchedPlayers.map((p) => (
                <tr key={p.playerId}>
                  <td>{p.playerId}</td>
                  <td>{p.playerName}</td>
                  <td>{p.jerseyNumber}</td>
                  <td>{p.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ALL PLAYERS */}
      <div style={{
        border: "1px solid #ccc",
        padding: "15px",
        backgroundColor: "#ffffff"
      }}>
        <h3>All Players</h3>

        <table border="1" width="100%" cellPadding="6">
          <thead>
            <tr style={{ backgroundColor: "#dfe6ed" }}>
              <th>ID</th>
              <th>Name</th>
              <th>Jersey</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {players.map((p) => (
              <tr key={p.playerId}>
                <td>{p.playerId}</td>
                <td>{p.playerName}</td>
                <td>{p.jerseyNumber}</td>
                <td>{p.role}</td>
                <td>
                  <button
                    onClick={() => handleEdit(p)}
                    style={{
                      backgroundColor: "#f0ad4e",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer"
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(p.playerId)}
                    style={{
                      backgroundColor: "#d9534f",
                      border: "none",
                      padding: "5px 10px",
                      color: "white",
                      marginLeft: "5px",
                      cursor: "pointer"
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default PlayerList;