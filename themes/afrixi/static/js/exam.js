
/* Quiz source: w3schools.com */
window.onload=function(){
    var quizApp = function() {
    
        this.score = 0;		
        this.qno = 1;
        this.currentque = 0;
        var totalque = quiz.EXAM.length;
    
        
        this.displayQuiz = function(cque) {
            this.currentque = cque;
            if(this.currentque <  totalque) {
                $("#tque").html(totalque);
                $("#previous").attr("disabled", false);
                $("#next").attr("disabled", false);
                $("#qid").html(quiz.EXAM[this.currentque].id + '.');
        
                
                $("#question").html(quiz.EXAM[this.currentque].question);	
                 $("#question-options").html("");
                for (var key in quiz.EXAM[this.currentque].options[0]) {
                  if (quiz.EXAM[this.currentque].options[0].hasOwnProperty(key)) {
    
                    $("#question-options").append(
                        "<div class='form-check option-block'>" +
                        "<label class='form-check-label'>" +
                                  "<input type='radio' class='form-check-input with-gap' name='option'   id='q"+key+"' value='" + quiz.EXAM[this.currentque].options[0][key] + "'><span id='optionval'>" +
                                      quiz.EXAM[this.currentque].options[0][key] +
                                 "</span></label>"
                    );
    
    
    
    
    
    
    
    
    
    
                  }
                }
            }
            if(this.currentque <= 0) {
                $("#previous").attr("disabled", true);	
            }
            if(this.currentque >= totalque) {
                    $('#next').attr('disabled', true);
                    for(var i = 0; i < totalque; i++) {
                        this.score = this.score + quiz.EXAM[i].score;
                    }
                return this.showResult(this.score);	
            }
        }
        
        this.showResult = function(scr) {
            $("#result").addClass('result');
            $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
            for(var j = 0; j < totalque; j++) {
                var res;
                if(quiz.EXAM[j].score == 0) {
                        res = '<span class="wrong">' + quiz.EXAM[j].score + '</span> <i class="red-text text-darken-4 material-icons">close</i>';
                } else {
                    res = '<span class="correct">' + quiz.EXAM[j].score + '</span> <i class="teal-text text-lighten-2 material-icons">done</i>';
                }
                $("#result").append(
                '<div class="result-question"><span class="flow-text light-blue darken-4">Q ' + quiz.EXAM[j].id + '</span> &nbsp;' + quiz.EXAM[j].question + '</div>' +
                '<div><b>Correct answer:</b> &nbsp;' + quiz.EXAM[j].answer + '</div>' +
                '<div class="last-row"><b>Score:</b> &nbsp;' + res +
                
                '</div>' 
                
                );
                
            }
        }
        
        this.checkAnswer = function(option) {
            var answer = quiz.EXAM[this.currentque].answer;
            option = option.replace(/\</g,"&lt;")   //for <
            option = option.replace(/\>/g,"&gt;")   //for >
            option = option.replace(/"/g, "&quot;")
    
            if(option ==  quiz.EXAM[this.currentque].answer) {
                if(quiz.EXAM[this.currentque].score == "") {
                    quiz.EXAM[this.currentque].score = 1;
                    quiz.EXAM[this.currentque].status = "correct";
            }
            } else {
                quiz.EXAM[this.currentque].status = "wrong";
            }
            
        }	
         
        this.changeQuestion = function(cque) {
                this.currentque = this.currentque + cque;
                this.displayQuiz(this.currentque);	
                
        }
        
    }
    
    
    var jsq = new quizApp();
    
    var selectedopt;
        $(document).ready(function() {
                jsq.displayQuiz(0);		
            
        $('#question-options').on('change', 'input[type=radio][name=option]', function(e) {
    
                var radio = $(this).find('input:radio');
                $(this).prop("checked", true);
                    selectedopt = $(this).val();
            });
            
                
                 
        });
    
        
        
        
        $('#next').click(function(e) {
                e.preventDefault();
                if(selectedopt) {
                    jsq.checkAnswer(selectedopt);
                }
                jsq.changeQuestion(1);
        });	
        
        $('#previous').click(function(e) {
            e.preventDefault();
            if(selectedopt) {
                jsq.checkAnswer(selectedopt);
            }
                jsq.changeQuestion(-1);
        });	
    }
    