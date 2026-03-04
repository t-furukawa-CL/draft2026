function updateTable() {
    // フォームから値を取得
    const data = {
        country: document.getElementById('country').value,
        teamName: document.getElementById('teamName').value,
        owner: document.getElementById('owner').value,
        manager: document.getElementById('manager').value,
        pitchingCoach: document.getElementById('pitchingCoach').value,
        coach1b: document.getElementById('coach1b').value,
        coach3b: document.getElementById('coach3b').value
    };

    // 表に反映
    document.getElementById('disp-country').innerText = data.country;
    document.getElementById('disp-teamName').innerText = data.teamName;
    document.getElementById('disp-owner').innerText = data.owner;
    document.getElementById('disp-manager').innerText = data.manager;
    document.getElementById('disp-pitchingCoach').innerText = data.pitchingCoach;
    document.getElementById('disp-coach1b').innerText = data.coach1b;
    document.getElementById('disp-coach3b').innerText = data.coach3b;

    // おまけ：未入力チェック
    if(!data.teamName) {
        alert("チーム名を入力してください！");
    }
}
