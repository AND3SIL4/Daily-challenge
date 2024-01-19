const PARAMS = {
  score: 400,
  normalizeFunction: (score) => {
    return score * 2 + 10;
  },
};

function test(params) {
  const { score, normalizeFunction } = params;
  const NORMALIZE_SCORE = normalizeFunction(score);
  return NORMALIZE_SCORE;
}

function main() {
  console.log(test(PARAMS));
}

main();
