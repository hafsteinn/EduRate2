'use strict';

describe('StudentFactory tests', function() {
    var $httpBackend;
    var studentFactory;
    var courseID = "500";
    var semester = "5";
    var evalID = "2";
    var results = {
                    QuestionID: 1,
                    TeacherSSN: '1234567890',
                    value: "2"
                };

    beforeEach(module('EduRateApp'));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        // Intercept HTTP requests and do the following:
        $httpBackend.when('GET', 'http://dispatch.ru.is/h18/api/v1/my/courses/').respond({"ID": 1,
                                                                                        "CourseID": "500",
                                                                                        "NameIS": "Titill",
                                                                                        "NameEN": "Title",
                                                                                        "DateBegin": "2014-03-18T14:30:21.3211845+00:00",
                                                                                        "DateEnd": "2014-04-18T14:30:21.3211845+00:00"});

        $httpBackend.when('GET', 'http://dispatch.ru.is/h18/api/v1/my/evaluations/').respond({ "ID": 1,
                                                                                        "CourseID": "500",
                                                                                        "CourseNameIS": "Vefforritun",
                                                                                        "CourseNameEN": "Webdesign",
                                                                                        "Semester": "5"});

        $httpBackend.when('GET', 'http://dispatch.ru.is/h18/api/v1/' + 'courses/' + courseID + '/' + semester + '/evaluations/' + evalID)
                                                                                    .respond({ "ID": 1,
                                                                                        "CourseID": courseID,
                                                                                        "TitleIS": "Titill",
                                                                                        "TitleEN": "Title",
                                                                                        "IntoTextIS": "Lýsing",
                                                                                        "IntroTextEN": "Intro text",
                                                                                        "Semester": semester,
                                                                                        "EvalID": evalID});


        $httpBackend.when('POST', 'http://dispatch.ru.is/h18/api/v1/' + 'courses/' + courseID + '/' + semester + '/evaluations/' + evalID, results)
                                                                                    .respond({ "QuestionID": 1,
                                                                                        "TeacherSSN": "1234567890",
                                                                                        "Value": "2"});                                                                           
        // Create a fresh instance of the StudentFactory:
        studentFactory = $injector.get('studentFactory');
    }));

    it('is possible to get myCourses', function() {
        studentFactory.myCourses().then(function(data) {    
            expect(data.ID).toBe(1);
            expect(studentFactory.getID()).toBe(data.ID);

            expect(data.CourseID).toBe('500');
            expect(studentFactory.getCourseID()).toBe(data.CourseID);

            expect(data.NameIS).toBe('Titill');
            expect(studentFactory.getNameIS()).toBe(data.NameIS);

            expect(data.NameEN).toBe('Title');
            expect(studentFactory.getNameEN()).toBe(data.NameEN);

            expect(data.DateBegin).toBe('2014-03-18T14:30:21.3211845+00:00');
            expect(studentFactory.getDateBegin()).toBe(data.DateBegin);

            expect(data.DateEnd).toBe('2014-04-18T14:30:21.3211845+00:00');
            expect(studentFactory.getDateEnd()).toBe(data.DateEnd);

        });
        $httpBackend.expectGET('http://dispatch.ru.is/h18/api/v1/my/courses/');
        $httpBackend.flush();
    });

    it('is possible to get my evaluations', function() {
        studentFactory.myEvaluations().then(function(data) {
            expect(data.ID).toBe(1);
            expect(studentFactory.getID()).toBe(data.ID);

            expect(data.CourseID).toBe('500');
            expect(studentFactory.getCourseID()).toBe(data.CourseID);

            expect(data.CourseNameIS).toBe('Vefforritun');
            expect(studentFactory.getCourseNameIS()).toBe(data.CourseNameIS);

            expect(data.CourseNameEN).toBe('Webdesign');
            expect(studentFactory.getCourseNameEN()).toBe(data.CourseNameEN);

            expect(data.Semester).toBe('5');
            expect(studentFactory.getSemester()).toBe(data.Semester);

        });
        $httpBackend.expectGET('http://dispatch.ru.is/h18/api/v1/my/evaluations/');
        $httpBackend.flush();
    });

    it('is possible to get my currentEvaluation', function() {
        studentFactory.currentEvaluation(courseID, semester, evalID).then(function(data) {
            expect(data.ID).toBe(1);
            expect(studentFactory.getID()).toBe(data.ID);

            expect(data.CourseID).toBe(courseID);
            expect(studentFactory.getCourseID()).toBe(courseID);

            expect(data.Semester).toBe('5');
            expect(studentFactory.getSemester()).toBe(semester);

            expect(data.TitleIS).toBe('Titill');
            expect(studentFactory.getTitleIS()).toBe(data.TitleIS);

            expect(data.TitleEN).toBe('Title');
            expect(studentFactory.getTitleEN()).toBe(data.TitleEN);

            expect(data.IntoTextIS).toBe('Lýsing');
            expect(studentFactory.getIntoTextIS()).toBe(data.IntoTextIS);

            expect(data.IntroTextEN).toBe('Intro text');
            expect(studentFactory.getIntroTextEN()).toBe(data.IntroTextEN);

            expect(data.EvalID).toBe(evalID);
            expect(studentFactory.getEvalID()).toBe(evalID);

        });
        $httpBackend.expectGET('http://dispatch.ru.is/h18/api/v1/' + 'courses/' + courseID + '/' + semester + '/evaluations/' + evalID);
        $httpBackend.flush();
    });



    it('is possible to get my saveEvaluation', function() {
        studentFactory.saveEvaluation(courseID, semester, evalID, results).then(function(data) {

            expect(studentFactory.getCourseID()).toBe(courseID);

            expect(studentFactory.getSemester()).toBe(semester);

            expect(studentFactory.getEvalID()).toBe(evalID);

            expect(data.QuestionID).toBe(1);
            expect(studentFactory.getQuestionID()).toBe(data.QuestionID);

            expect(data.TeacherSSN).toBe('1234567890');
            expect(studentFactory.getTeacherSSN()).toBe(data.TeacherSSN);

            expect(data.Value).toBe('2');
            expect(studentFactory.getValue()).toBe(data.Value);

            expect(studentFactory.getResults()).toBe(results);

        });
        $httpBackend.expectPOST('http://dispatch.ru.is/h18/api/v1/' + 'courses/' + courseID + '/' + semester + '/evaluations/' + evalID, results);
        $httpBackend.flush();
    });

  });