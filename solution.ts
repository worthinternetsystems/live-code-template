class Node {
  private character: string;
  private right: Node | undefined;
  private left: Node | undefined;
  
  constructor(character: string, left?: Node, right?: Node) {
    // left is always the dot representation
    this.left = left;
    // right is always the dash representation
    this.right = right;
    // the character represented by this node
    this.character = character;
  }
  
  // determines if this is a leaf node
  // aka this node has no valid descendants
  private isLeaf(): boolean {
    return this.left === undefined || this.right === undefined;
  }
   
   /**
    * Recursively iterates over the tree to find a matching node
    */
   public traverse(signal: string): string[] {
     // base case: node has been found
     if (signal.length === 0 || this.isLeaf()) {
       return [this.character]
     } else if (signal.charAt(0) === ".") {
       // TS can't assert that left & right are defined even though they are asserted above
       // Can probably be fixed with some fancy typeguards
       // FIXME
       const left = this.left as Node;
       return left.traverse(signal.substring(1));
     } else if (signal.charAt(0) === "-") {
       const right = this.right as Node;
       return right.traverse(signal.substring(1));
     } else {
       // "?" character, return the subtee from this node at a depth of signal length
       return this.subtreeAt(signal.length)
     }
   }
    
    /**
     * Returns the subtree at [depth] from current node
     */
    private subtreeAt(depth: number): string[] {
      if (depth === 0) {
        return [this.left, this.right];
      }
      return [];
    }
}

export const S = new Node("S");

export const U = new Node("U");

export const I = new Node("I", S, U);

export const R = new Node("R");

export const W = new Node("W");

export const A = new Node("A", R, W);

export const E = new Node("E", I, A);

export const D = new Node("D");

export const K = new Node("K");

export const G = new Node("G");

export const O = new Node("O");

export const M = new Node("M", G, O);

export const N = new Node("N", D, K);

export const T = new Node("T", N, M);

export const MorseTree = new Node("", E, T);

const possibilities = (signals: string): string[] => {
  // morse code can be represented as a B-Tree
  // for any given signal length we will (may?) end up with 2n possibilities of characters
  // This tree represents the possible characters that can come from a signal of length 0-3 
  return [];
};

export default possibilities;

