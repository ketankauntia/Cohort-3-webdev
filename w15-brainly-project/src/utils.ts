//function for generating random links. ez way
export function randomLinkGenerator(outputLength:number):string{
    let options = "aihvadvbastryquweiopkajXNOQCCVBQOXNOQWQURFLSANXMZBCQPERQER210846816520731";
    let length = options.length;
    let ans = "";

    for(let i=0;i<outputLength;i++){
        ans += options[Math.floor((Math.random()*length))]
    }
    return ans;
}