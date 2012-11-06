function runtest(test) {
    grapel.load(test.graph);
    return _.Equal(test.process.call(...), test.result);
}
