    const Hack = () => {
    return (
        <div>
        <script>
            
            var success = false;
        
            function submitString() {
                let submission = document.getElementById("stringGrabber").value;
                let length = submission.length;
                if (length != 6) {
                    document.getElementById("correctSpace").innerHTML = 0;
                    document.getElementById("wrongSpace").innerHTML = 0;
                    return;
                }
                let wS = 0;
                let cS = 0;
                const answer = "#'cX%0";

                for (let i = 0; i < 6; ++i) {
                    if (answer.charAt(i) === submission.charAt(i)) {
                        ++cS;
                    }
                    else if (submission.search(answer.charAt(i)) != -1) {
                        ++wS;
                    }
                }

                document.getElementById("correctSpace").innerHTML = cS;
                document.getElementById("wrongSpace").innerHTML = wS;
                
                if (cS === 6 && success === false) {
                    success = true;
                    showSuccess();
                }

                return;
            }

            function showSuccess() {
                let btn = document.createElement("button");
                btn.innerHTML = "Success!!!";
                btn.onclick = function() {
                    alert("You clicked the success button!");
                };
                document.body.appendChild(btn);

            }
        </script>
        <form action="javascript:submitString()">
            <label for="stringGrabber">Input a 6-character string:</label><br>
            <input type="text" id="stringGrabber" name="fname"><br>
            <input type="submit" id="button" value="Submit">
        </form>
        <table>
            <tr>
                <th>Number of correct characters in the correct space</th>
                <th>Number of correct characters in the wrong space</th>
            </tr>
            <tr>
                <td id="correctSpace"></td>
                <td id="wrongSpace"></td>
            </tr>
        </table>
        <div id="ifSuccessful"></div>
    </div>
    );
}

export default Hack;
