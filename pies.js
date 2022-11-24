const findPies = (pies, sweetness) => {
    let answer = [];
    let PieArray = [];
    for (let i = 0; i < pies.length; i++) {
        let pieSweetness = pies[i];
      if (pieSweetness == sweetness) {
            answer.push(i);
            return answer;
        }else if (pieSweetness < sweetness) {
            PieArray.push(i);
            for (let j = i + 1; j< pies.length; j++) {
                if (pieSweetness + pies[j] <= sweetness) {
                    pieSweetness += pies[j];
                    PieArray.push(j);
                }
                if (pieSweetness == sweetness) {
                    answer.push(PieArray);
                    return answer;
                }
            }
        }
    };
    return answer;
}
console.log(findPies([1, 2, 3, 2, 1], 6));
