import assert from 'assert';


class OpenSheet {
  private cells: { [key: string]: string } = {};

  private caches: {[key: string]: number} = {};

  set_cell(cellName: string, value: string): void {
    this.caches = {};
    this.cells[cellName] = value;
  }

  public get_cell(cellName: string): number {
    return this.get_cell_inner(cellName, new Set<string>())
  }

  private get_cell_inner(cellName: string, visited: Set<string>): number {
    if (visited.has(cellName)) {
      throw new Error(`cell ${cellName} visited`);
    }
    if (cellName in this.caches) {
      return this.caches[cellName];
    }

    const value = this.cells[cellName];

    visited.add(cellName);

    if (value === undefined) {
      this.caches[cellName] = 0;
      return 0;
    }

    if (value.startsWith('=')) {
      const parts = value.substring(1).split('+').map(part => part.trim());
      let sum = 0;
      for (const part of parts) {
        if (isNaN(Number(part))) {
          sum += this.get_cell_inner(part, visited);
          visited.delete(cellName);
        } else {
          sum += parseInt(part, 10);
        }
      }
      this.caches[cellName] = sum;
      return sum;
    }


    const num = parseInt(value, 10);
    this.caches[cellName] = num;
    return num;
  }
}

// Example usage
const sheet = new OpenSheet();

// Execute test cases with assertions
// Test Case 1: Simple Value Assignment and Retrieval
sheet.set_cell("D1", "100");
assert.strictEqual(sheet.get_cell("D1"), 100, 'Test Case 1 Failed: D1 should be 100');

// Test Case 2: Reference to an Empty Cell
sheet.set_cell("E1", "=A2"); // Assuming A2 is not set and thus empty
assert.strictEqual(sheet.get_cell("E1"), 0, 'Test Case 2 Failed: E1 should be 0 (empty cell reference)');

// Test Case 3: Summation of Direct Values
sheet.set_cell("F1", "=D1+10");
console.log(sheet.get_cell("F1"))
assert.strictEqual(sheet.get_cell("F1"), 110, 'Test Case 3 Failed: F1 should be 110 (D1 + 10)');

// Test Case 4: Reference Chain
sheet.set_cell("G1", "=F1");
assert.strictEqual(sheet.get_cell("G1"), 110, 'Test Case 4 Failed: G1 should be 110 (same as F1)');

// Test Case 5: Multiple Levels of Formula References
sheet.set_cell("H1", "=10");
sheet.set_cell("I1", "=H1+20");
sheet.set_cell("J1", "=I1+30");
assert.strictEqual(sheet.get_cell("J1"), 60, 'Test Case 5 Failed: J1 should be 60');

// Test Case 6: Update Cell Value After Initial Set
sheet.set_cell("K1", "5");
sheet.set_cell("K1", "15");
assert.strictEqual(sheet.get_cell("K1"), 15, 'Test Case 6 Failed: K1 should be 15 after update');

// Test Case 7: Summation Involving an Empty Cell
sheet.set_cell("L1", "=K1+M1"); // Assuming M1 is not set and thus treated as 0
assert.strictEqual(sheet.get_cell("L1"), 15, 'Test Case 7 Failed: L1 should be 15 (K1 + empty M1)');

// Test Case 8: Complex Formula with Multiple References
sheet.set_cell("N1", "=L1+J1+D1"); // Sum of L1, J1, and D1
assert.strictEqual(sheet.get_cell("N1"), 175, 'Test Case 8 Failed: N1 should be 175 (L1 + J1 + D1)');

console.log("All test cases passed successfully!");
