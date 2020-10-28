function calcGrade(score) {
    // Return the grade as a string
    if(score>96){
        return "A+";
    }
    else if(score>91){
        return "A";
    }
    else if(score>89){
        return "A-";
    }
    else if(score>86){
        return "B+";
    }
    else if(score>81){
        return "B";
    }
    else if(score>79){
        return "B-";
    }
    else if(score>76){
        return "C+";
    }
    else if(score>71){
        return "C";
    }
    else if(score>69){
        return "C-";
    }
      else if(score>66){
        return "D+";
    }
    else if(score>61){
        return "D";
    }
    else{
        return "D-";
    }


}

