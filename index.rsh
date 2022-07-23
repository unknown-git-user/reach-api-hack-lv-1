'reach 0.1'

export const main = Reach.App(() => {
    const A = Participant('Alice', {
        //alice interact interface - deployer
        ready: Fun([], Null),
    });
    const B = API('Bob', {
        //bobs
    });

    init();

    A.only(() => {
        interact.ready();
    });

    A.publish();
    commit();
    
    exit();
});