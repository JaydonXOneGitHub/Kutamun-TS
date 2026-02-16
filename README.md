# Kutamun-TS
Kutamun-TS (also referred to as simply Kutamun) is the TypeScript version of [Kutamun](https://github.com/JaydonXOneGitHub/Kutamun), which was built in Rust.<br>

# How to Use
In order to use Kutamun-TS for your application, first run:
```bash
npm install kutamun
```
Or:
```bash
npm install kutamun
```
In your project.<br><br>

Then, in your JavaScript code:
```javascript
import { MultiGrid } from "kutamun";

const multiGrid = new MultiGrid();
// Do what you'll need with the MultiGrid
```
Optionally, if you're using TypeScript:
```typescript
import { MultiGrid } from "kutamun";

class ButtonData
{
  // Put in the data you want to represent your button
}

const multiGrid: MultiGrid<ButtonData> = new MultiGrid();
// Do what you'll need with the MultiGrid
```
Alternatively, if you only need a singular `Grid<GridButton>`:
```javascript
import { Grid } from "kutamun";

const grid = new Grid();
// Do what you'll need with the Grid
```
Or this for TypeScript:
```typescript
import { Grid } from "kutamun";

class ButtonData
{
  // Put in the data you want to represent your button
}

const grid: Grid<ButtonData> = new Grid();
// Do what you'll need with the MultiGrid
```
