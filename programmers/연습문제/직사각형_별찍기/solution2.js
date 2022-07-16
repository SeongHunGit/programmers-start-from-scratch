process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    console.log((`${"*".repeat(a)} \n`).repeat(b))
});

// const n = 입력값
// const a = 가로길이, const b = 세로길이
// *를 a(가로길이)만큼 반복하고 줄바꿈 한 것을 b(세로길이)만큼 반복
