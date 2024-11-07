# Pokémon Nuzlocke Optimizer

This repository contains the source code for the Pokémon Nuzlocke Optimizer, a calculator and guide designed to help players optimize their hardcore Pokémon Nuzlocke runs.

## Claude Interaction

### For Project Knowledge (permanent memory):

- Core game mechanics documentation (the AI behavior docs you've shared)
- Data structure definitions/interfaces once we finalize them
- Key architectural decisions and their rationales
- High-level project requirements and goals
- Important constraints or edge cases we need to handle

### For Per-Chat (temporary context):

- Specific data samples we're currently working with
- Code snippets we're actively designing/reviewing
- Implementation details we're discussing
- Test cases or examples
- Current issues or questions being addressed

## Implementation Plan

### 1. Data Preparation

Organize all the necessary game data into structured JSON files. Ensure that you have all the required information, including:

- Pokémon stats (base stats, abilities, types)
- Move pools (move details, power, accuracy, type, etc.)
- Learnsets (level-up moves, TM/HM moves, egg moves, move tutors)
- Encounter rates (per route, per terrain)
- Trainer teams (Pokémon, levels, movesets, held items, stats)
- Item locations (TMs, HMs, held items, other key items)

### 2. Defining Helper Functions and Structures

Create helper functions and custom data structures for various tasks and entities:

- Damage calculation
- Type effectiveness
- Possible movesets
- Pokémon and their attributes
- Trainer and their team
- Encounters and their properties

### 3. Implement a Battle Simulator

Develop a basic battle simulator that can simulate a battle between two Pokémon teams, taking into account:

- Turn order
- Move selection
- Type effectiveness
- Damage calculation
- Status effects
- Switching Pokémon

### 4. Develop a Pruning Strategy

Implement an efficient pruning strategy to explore the most promising paths, using techniques such as:

- Monte Carlo Tree Search (MCTS)
- Beam search
- Heuristics (e.g., prioritizing Pokémon with better type coverage or higher base stats)

### 5. Optimize Encounter Selection

Incorporate encounter strategies into the algorithm to optimize the selection process:

- Using repels to delay encounters
- Encountering Pokémon in different terrains (water, grass, etc.)
- Applying reinforcement learning, genetic algorithms, or rule-based systems

### 6. Create a User Interface (Optional)

Develop a user interface to allow users to input their current game state and receive recommendations on the best actions to take. Include inputs for:

- Current team
- Items
- Game location
- Encountered Pokémon
- Trainer battles

## Development Notes

- Start with a language you are comfortable with, such as JavaScript. Optimize or port the implementation to Rust if needed for performance improvements.
- Focus on developing the algorithm and logic before addressing performance optimizations.
- Test and refine the implementation iteratively to ensure accuracy and efficiency.
