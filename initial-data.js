// Initialize some sample data when the app loads
(async function initializeData() {
    // Wait a bit for the app to load
    setTimeout(async () => {
        const players = room.collection('player').getList();
        
        // Only add sample data if no players exist
        if (players.length === 0) {
            const samplePlayers = [
                {
                    name: "Marcus Silva",
                    age: 24,
                    position: "Forward",
                    club: "Manchester United",
                    nationality: "Brazil",
                    value: 85000000,
                    contract_end: "2026-06-30",
                    skills: {
                        pace: 92,
                        shooting: 89,
                        passing: 78,
                        defending: 45,
                        physical: 85
                    }
                },
                {
                    name: "Alessandro Rossi",
                    age: 28,
                    position: "Midfielder",
                    club: "AC Milan",
                    nationality: "Italy",
                    value: 65000000,
                    contract_end: "2025-06-30",
                    skills: {
                        pace: 75,
                        shooting: 82,
                        passing: 94,
                        defending: 88,
                        physical: 79
                    }
                },
                {
                    name: "Erik Hansen",
                    age: 26,
                    position: "Defender",
                    club: "Bayern Munich",
                    nationality: "Norway",
                    value: 45000000,
                    contract_end: "2027-06-30",
                    skills: {
                        pace: 68,
                        shooting: 35,
                        passing: 85,
                        defending: 96,
                        physical: 92
                    }
                },
                {
                    name: "Kenji Nakamura",
                    age: 22,
                    position: "Midfielder",
                    club: "Real Madrid",
                    nationality: "Japan",
                    value: 35000000,
                    contract_end: "2028-06-30",
                    skills: {
                        pace: 88,
                        shooting: 76,
                        passing: 91,
                        defending: 72,
                        physical: 70
                    }
                },
                {
                    name: "David Thompson",
                    age: 29,
                    position: "Goalkeeper",
                    club: "Liverpool",
                    nationality: "England",
                    value: 25000000,
                    contract_end: "2025-06-30",
                    skills: {
                        pace: 45,
                        shooting: 15,
                        passing: 78,
                        defending: 95,
                        physical: 88
                    }
                }
            ];

            for (const player of samplePlayers) {
                await room.collection('player').create(player);
            }

            console.log('Sample players added to database');
        }

        const clubs = room.collection('club').getList();
        if (clubs.length === 0) {
            const sampleClubs = [
                {
                    name: "Manchester United",
                    league: "Premier League",
                    country: "England",
                    budget: 200000000,
                    reputation: 95
                },
                {
                    name: "Real Madrid",
                    league: "La Liga",
                    country: "Spain",
                    budget: 250000000,
                    reputation: 98
                },
                {
                    name: "Bayern Munich",
                    league: "Bundesliga",
                    country: "Germany",
                    budget: 180000000,
                    reputation: 94
                },
                {
                    name: "AC Milan",
                    league: "Serie A",
                    country: "Italy",
                    budget: 120000000,
                    reputation: 89
                }
            ];

            for (const club of sampleClubs) {
                await room.collection('club').create(club);
            }

            console.log('Sample clubs added to database');
        }
    }, 2000);
})();

