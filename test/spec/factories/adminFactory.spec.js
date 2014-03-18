'use strict';

describe('AdminFactory tests', function() {
    var $httpBackend;
    var adminFactory;
    var tempID = 1;
    var evaluationTemplate = 'newTemp';
    var newEval = 'newEval';
    var evalID = 3;


    beforeEach(module('EduRateApp'));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        // Intercept HTTP requests and do the following:
        $httpBackend.when('GET', 'http://dispatch.ru.is/h18/api/v1/evaluationtemplates/').respond({"ID": 1,
                                                                                            "TemplateTitleIS": "Titill",
                                                                                            "TemplateTitleEN": "Title",
                                                                                            "StartDate": "2014-03-18T19:40:51.9202824+00:00",
                                                                                            "EndDate": "2014-04-18T19:40:51.9207829+00:00",
                                                                                            "Status": "1"});
        $httpBackend.when('GET', 'http://dispatch.ru.is/h18/api/v1/evaluationtemplates/' + tempID).respond({"ID": 1,
                                                                                            "TitleIS": "Titill",
                                                                                            "TitleEN": "Title",
                                                                                            "IntroTextIS": "Lýsing",
                                                                                            "IntroTextEN": "Intro"});   

        $httpBackend.when('POST', 'http://dispatch.ru.is/h18/api/v1/evaluationtemplates/', evaluationTemplate).respond({"ID": 1,
                                                                                            "TitleIS": "Titill",
                                                                                            "TitleEN": "Title",
                                                                                            "IntroTextIS": "Lýsing",
                                                                                            "IntroTextEN": "Intro"}); 

        $httpBackend.when('POST', 'http://dispatch.ru.is/h18/api/v1/evaluations/', newEval).respond({"TemplateID": 1,
                                                                                            "StartDate": "2014-03-18T20:36:07.3329513+00:00",
                                                                                            "EndDate": "2014-04-18T20:36:07.3329513+00:00"});  

        $httpBackend.when('GET', 'http://dispatch.ru.is/h18/api/v1/evaluations/' +  evalID + '/').respond({ "ID": 1,
                                                                                            "TemplateID": 2,
                                                                                            "TemplateTitleIS": "Titill",
                                                                                            "TemplateTitleEN": "Title"});  

        $httpBackend.when('GET', 'http://dispatch.ru.is/h18/api/v1/evaluations').respond({"ID": 1,
                                                                                            "TemplateTitleIS": "Titill",
                                                                                            "TemplateTitleEN": "Title",
                                                                                            "StartDate": "2014-03-18T19:40:51.9202824+00:00",
                                                                                            "EndDate": "2014-04-18T19:40:51.9207829+00:00",
                                                                                            "Status": "2"});                                                         
        // Create a fresh instance of the adminFactory:
        adminFactory = $injector.get('adminFactory');
    }));

    it('is possible to get evaluationTemplates', function() {
        adminFactory.evaluationTemplates().then(function(data) {    
            expect(data.ID).toBe(1);
            expect(adminFactory.getID()).toBe(data.ID);

            expect(data.TemplateTitleIS).toBe('Titill');
            expect(adminFactory.getTemplateTitleIS()).toBe(data.TemplateTitleIS);

            expect(data.TemplateTitleEN).toBe('Title');
            expect(adminFactory.getTemplateTitleEN()).toBe(data.TemplateTitleEN);

            expect(data.StartDate).toBe('2014-03-18T19:40:51.9202824+00:00');
            expect(adminFactory.getStartDate()).toBe(data.StartDate);

            expect(data.EndDate).toBe('2014-04-18T19:40:51.9207829+00:00');
            expect(adminFactory.getEndDate()).toBe(data.EndDate);

            expect(data.Status).toBe('1');
            expect(adminFactory.getStatus()).toBe(data.Status);
        });
        $httpBackend.expectGET('http://dispatch.ru.is/h18/api/v1/evaluationtemplates/');
        $httpBackend.flush();
    });

    it('is possible to get getevaluationTemplate', function() {
        adminFactory.getevaluationTemplate(tempID).then(function(data) {    
            expect(data.ID).toBe(1);
            expect(adminFactory.getID()).toBe(data.ID);

            expect(data.TitleIS).toBe('Titill');
            expect(adminFactory.getTitleIS()).toBe(data.TitleIS);

            expect(data.TitleEN).toBe('Title');
            expect(adminFactory.getTitleEN()).toBe(data.TitleEN);

            expect(data.IntroTextIS).toBe('Lýsing');
            expect(adminFactory.getIntroTextIS()).toBe(data.IntroTextIS);

            expect(data.IntroTextEN).toBe('Intro');
            expect(adminFactory.getIntroTextEN()).toBe(data.IntroTextEN);

            expect(adminFactory.getTempID()).toBe(tempID);
        });
        $httpBackend.expectGET('http://dispatch.ru.is/h18/api/v1/evaluationtemplates/' + tempID);
        $httpBackend.flush();
    });

        it('is possible to get getevaluationTemplate', function() {
        adminFactory.newEvaluationTemplate(evaluationTemplate).then(function(data) {    
            expect(data.ID).toBe(1);
            expect(adminFactory.getID()).toBe(data.ID);

            expect(data.TitleIS).toBe('Titill');
            expect(adminFactory.getTitleIS()).toBe(data.TitleIS);

            expect(data.TitleEN).toBe('Title');
            expect(adminFactory.getTitleEN()).toBe(data.TitleEN);

            expect(data.IntroTextIS).toBe('Lýsing');
            expect(adminFactory.getIntroTextIS()).toBe(data.IntroTextIS);

            expect(data.IntroTextEN).toBe('Intro');
            expect(adminFactory.getIntroTextEN()).toBe(data.IntroTextEN);

            expect(adminFactory.getEvaluationTemplate()).toBe(evaluationTemplate);
        });
        $httpBackend.expectPOST('http://dispatch.ru.is/h18/api/v1/evaluationtemplates/', evaluationTemplate);
        $httpBackend.flush();
    });


    it('is possible to get evaluationTemplates', function() {
        adminFactory.newEvaluation(newEval).then(function(data) {    
            expect(data.TemplateID).toBe(1);
            expect(adminFactory.getTemplateID()).toBe(data.TemplateID);

            expect(data.StartDate).toBe('2014-03-18T20:36:07.3329513+00:00');
            expect(adminFactory.getStartDate()).toBe(data.StartDate);

            expect(data.EndDate).toBe('2014-04-18T20:36:07.3329513+00:00');
            expect(adminFactory.getEndDate()).toBe(data.EndDate);

            expect(adminFactory.getNewEval()).toBe(newEval);


        });
        $httpBackend.expectPOST('http://dispatch.ru.is/h18/api/v1/evaluations/', newEval);
        $httpBackend.flush();
    });

    it('is possible to get evaluationTemplates', function() {
        adminFactory.getResults(evalID).then(function(data) {    
            expect(data.ID).toBe(1);
            expect(adminFactory.getID()).toBe(data.ID);

            expect(data.TemplateID).toBe(2);
            expect(adminFactory.getTemplateID()).toBe(data.TemplateID);

            expect(data.TemplateTitleIS).toBe('Titill');
            expect(adminFactory.getTemplateTitleIS()).toBe(data.TemplateTitleIS);

            expect(data.TemplateTitleEN).toBe('Title');
            expect(adminFactory.getTemplateTitleEN()).toBe(data.TemplateTitleEN);

            expect(adminFactory.getEvalID()).toBe(evalID);


        });
        $httpBackend.expectGET('http://dispatch.ru.is/h18/api/v1/evaluations/' +  evalID + '/');
        $httpBackend.flush();
    });

    it('is possible to get evaluationTemplates', function() {
        adminFactory.getEvaluations().then(function(data) {    
            expect(data.ID).toBe(1);
            expect(adminFactory.getID()).toBe(data.ID);

            expect(data.TemplateTitleIS).toBe('Titill');
            expect(adminFactory.getTemplateTitleIS()).toBe(data.TemplateTitleIS);

            expect(data.TemplateTitleEN).toBe('Title');
            expect(adminFactory.getTemplateTitleEN()).toBe(data.TemplateTitleEN);

            expect(data.StartDate).toBe('2014-03-18T19:40:51.9202824+00:00');
            expect(adminFactory.getStartDate()).toBe(data.StartDate);

            expect(data.EndDate).toBe('2014-04-18T19:40:51.9207829+00:00');
            expect(adminFactory.getEndDate()).toBe(data.EndDate);

            expect(data.Status).toBe('2');
            expect(adminFactory.getStatus()).toBe(data.Status);

        });
        $httpBackend.expectGET('http://dispatch.ru.is/h18/api/v1/evaluations');
        $httpBackend.flush();
    });
  });