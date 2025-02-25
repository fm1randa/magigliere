# Magigliere

A Harry Potter hub – Filipe Miranda's Prosigliere CC solution.

## Getting started

```bash
git clone https://github.com/fm1randa/magigliere
cd magigliere
npm install
```

## Usage

### Dev mode
```bash
npm run dev
```

### Production mode
```bash
npm run build
npm start
```

## Approach

### Challenge requirements
The challenge consists in build a Harry Potter-themed app using React (with TypeScript if possible) that displays characters and spells from the Harry Potter API. Features include:

	1.	List of characters, students, and staff.
	2.	Character detail page.
	3.	Navigation between views.
	4.	Option to favorite characters and set a preferred house (Gryffindor, Slytherin, Hufflepuff, Ravenclaw).
	5.	Aesthetic design with appropriate colors and fonts.

The app should be responsive, well-structured, and use proper React and TypeScript practices.

### How it was tackled

A NextJS app with Typescript and TailwindCSS was created. All the requirements were implemented including a search feature and student/staff filter.

#### Pages

- Home
- Characters
  - Character [id]
- Preferences

The home is a landing page that has an action button to direct user to the characters page.

The characters page renders every Harry Potter character ordering by the favorites alphabetically. It includes a search bar and a student and staff filters. When the user clicks on the character card, the app will render a page with all information available about the selected char.

The preferences page is a simple page where the user can switch its favorite house between Gryffindor, Slytherin, Hufflepuff, Ravenclaw.

#### Stack

- **NextJS** – Simplify the development and deployment.
- **TailwindCSS** - Get fast styles with built-in classes and easy custom theme.
- **TanStack Query** - Easily fetch and manage data.
- **Zustand** - Create straightforward global states.
- **@uidotdev/usehooks (useDebounce only)** - Utility hooks – effortlessly debounce char search.

## What would I do next

With more time, I would:

- Implement better filtering
- Add visual indicator for favorite characters on the character list
- Improve preferences page UI with house images
- Change UI according to the chosen house.
- Add microinteractions with Harry Potter effects.
- Improve performance