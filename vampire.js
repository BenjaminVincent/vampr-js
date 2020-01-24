class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numOfVamp = 0;
    let currentVamp = this;
    
    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numOfVamp++;
    }

    return numOfVamp;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let v1 = this.numberOfVampiresFromOriginal;
    let v2 = vampire.numberOfVampiresFromOriginal;
    if (v1 < v2) {
      return true;
    } else {
      return false;
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    if (this === vampire) return this;
    

    let v1 = this.numberOfVampiresFromOriginal;
    let v2 = vampire.numberOfVampiresFromOriginal;

     let v1Temp = this;
     let v2Temp = vampire;

    if (v1 === 0) return this;
    if (v2 === 0) return vampire;
    // if (v1 === 1 && v2 === 1) return this.creator;


    if (v1 > v2) {
      v1Temp = this.creator;
      return v2Temp.closestCommonAncestor(v1Temp);
    }

    if (v2 > v1) {
      v2Temp = vampire.creator;
      return v1Temp.closestCommonAncestor(v2Temp);
    }

    if (v2 === v1) {
      v1Temp = this.creator;
      return v2Temp.closestCommonAncestor(v1Temp);
    }





  }

}

module.exports = Vampire;

