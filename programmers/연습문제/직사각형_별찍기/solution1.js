process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = "*".repeat(a)
    for(let i = 0; i < b; i++) {
        console.log(row)
    }
    console.log(a, b)
});

// const n = 입력값
// const a = 가로길이, const b = 세로길이
// const row = *를 a(가로길이)만큼 반복한 뒤 반환
// for문 = b(세로길이)만큼 반복하는데, 반복할 때마다 row를 출력
