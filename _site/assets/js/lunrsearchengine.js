
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Hello there... It's our pleasure to meet you!",
    "body": "The primary objective of thoughtful works is to encourage the exchange of ideas among Rust developers, who each possess a unique set of skills and expertise, through virtual collaboration. We explore an extensive range of concepts here. We strive to present information in the clearest and most straightforward manner possible, covering all the grounds needed to grasp it completely. Our commitment is to provide a clutter-free experience, free of advertisements on the blogs, and without requiring a subscription—any information that is beneficial must be invariably democratized for all, thereby enabling readers to fully understand the subject matter at hand without having to rely on additional sources for further clarification. Why Scala?: Scala is a powerful and versatile programming language that combines object-oriented and functional programming paradigms. Here are the strengths of Scala:  Expressiveness: Scala’s syntax is more expressive than Java’s, enabling us to write the same functionality in a clear, concise, and understandable manner. Expressiveness in a programming language refers to its ability to facilitate the expression of the programmer’s intent with the least amount of verbosity possible.  Functional Programming: Adopting functional programming can bring about improved code quality, maintainability, and scalability. Scala’s combination of features makes it well-suited for a wide range of applications, from small scripts to large-scale, particularly distributed systems. Feel free to get in touch with us if you like reading our posts, have feedback for us, or would like to contribute. Happy learning! Senthil NayaganFounder and content creator, towardsdata. dev and rustinaction. dev. Email: hello@thoughtfulworks. devTwitter: thoughtfulwxInstagram: thoughtful. worksGitHub: thoughtfulworks "
    }, {
    "id": 2,
    "url": "http://localhost:4000/archive",
    "title": "Archive",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/authors",
    "title": "Meet our contributors!",
    "body": "                                                                   Senthil Nayagan:                   I am a Data Engineer by profession and a Rustacean by interest. Founder and Content Creator, towardsdata. dev.                        "
    }, {
    "id": 4,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 5,
    "url": "http://localhost:4000/comment-policy.html",
    "title": "Comment Policy",
    "body": "Written by Disqus. Refer the official comment policy here. This comment policy is a place for the author to set the tone of his/her community and lay a foundation for what is acceptable. They also provide a reference for making moderation decisions. If the author ever needs to ban a member or remove a comment, the author will be able to refer those members to the pre-determined community guidelines that they may have failed to follow. What to consider: When developing community guidelines, it is good to consider the type of community the author is trying to cultivate. Guidelines can cover topics like:  Etiquette - “Be polite and stay on topic”. “No self-promotion”. “Don’t flag/downvote comments because you disagree with a user. ” Expectations - “Your comment will be removed for reason X, Y, and Z” Privacy - “Don’t post personal information” Moderation Settings - “Comments containing links are pre-moderated”. “Discussions auto-close after 7 days”.  Anything else that you’d like members to keep in mind while commenting"
    }, {
    "id": 6,
    "url": "http://localhost:4000/contact",
    "title": "Contact us",
    "body": "    Please feel free to send your message to us. We will respond as soon as we can.                       "
    }, {
    "id": 7,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                               Case Class in Scala              :                                                                             Senthil Nayagan                              &nbsp;Dec 20, 2023 -     4 Mins Read                                                                       dto                                  object-oriented-programming                                  oops                                              "
    }, {
    "id": 8,
    "url": "http://localhost:4000/privacy-policy.html",
    "title": "Privacy Policy",
    "body": "Your privacy really matters! {{ site. name }} takes your privacy seriously. To better protect your privacy, we provide this privacy policy notice explaining the way your personal information is collected and used. Please do not hesitate to contact us if you have further concerns or seek extra information about our Privacy Policy. Cookies: This website DOES NOT use cookies. Links to Third Party Websites: We have included links on this website for your use and reference. We are not responsible for the privacy policies on these websites. You should be aware that the privacy policies of these websites may differ from our own. Security: The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. Changes To This Privacy Policy: This Privacy Policy is effective and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website. Consent: By using our website, you consent to and accept our Privacy Policy and its terms and conditions. "
    }, {
    "id": 9,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 10,
    "url": "http://localhost:4000/scala/2023/case-class",
    "title": "Case Class in Scala",
    "body": "2023/12/20 - What is a case class?Case classes are a special kind of class created using the keyword case. Case classes are excellent for data transfer objects and for representing immutable data. It is a type of class that is mostly utilised for data storage. case class Person(name: String, age: Int)The following beneficial features or conveniences are automatically added to our class when the Scala compiler discovers a case class:  It adds a factory method, apply() for creating new instances, so we don’t need to use the keyword new to instantiate a class.  Unless all arguments in the parameter list of a case class are declared as var, all arguments implicitly get a val prefix, and thus the val keyword is optional. To put it another way, by default, case classes automatically transform arguments to value fields (val fields), therefore the val keyword is not required to prefix them. If we require a variable field, we can still use the var keyword, but this is not what the case class was intended for.  The compiler automatically implements the following methods for the class:     apply   unapply   copy   equals   hashCode   toString    Every case class has a method named copy that allows us to easily create a same or a modified copy of the class’s instance.  A companion object is created automatically with the appropriate apply and unapply methods.  The methods generated by the Scala compiler for case classes aren’t special in any way, other than that they are automatically generated for us. By adding the methods and companion objects ourselves, we may avoid using case classes. Because it would take a lot of time and effort to write each of these methods appropriately for every data-storage class, case classes have the advantage of being more convenient. Like a regular class, a case class can extend other classes, including trait and case classes. Case classes are Scala’s way of allowing pattern matching on objects without requiring a large amount of boilerplate code. Let’s explore the advantages of a case class in action: scala&gt; case class Person(name: String, age: Int)defined case class Personscala&gt; val person = Person( John , 36)val person: Person = Person(John,36)scala&gt; val otherPerson = person. copy(name =  Robert )val otherPerson: Person = Person(Robert,36)scala&gt; val someOtherPerson = person. copy()val someOtherPerson: Person = Person(John,36)scala&gt; println(person. equals(someOtherPerson))truescala&gt; person == otherPersonval res0: Boolean = falsescala&gt; person match {   |   case Person(x, 36) =&gt; s $x is a younger person    |   case Person(x, 50) =&gt; s $x is a older person    | }val res1: String = John is a younger person Line 1: Able to instantiate without a new operator because of the companion object’s factory method, Person. apply().  Line 5: The auto-generated toString method prints the fields in our instance.  Line 7: The second instance (otherPerson) shares the same value for the second field, so we only need to specify a new value for the first field in the copy method.  Line 10: Copies of case classes result in strict equivalence. Hence, the equals statement in line 12 results in true.  Case class extends other class: If our case class had extended another class with its own fields but we hadn’t added the fields as case class parameters, the generated methods wouldn’t have been able to make use of them. Before using case classes, it’s necessary to be aware of this important caution. Copy vs. cloneThe case class’s copy method lets us make a copy of an object. Remember that a copy method differs from a clone method in that a copy allows us to modify fields at any time while it is being copied. case class Worker(name: String, department: String)object CaseClassCopyMethod extends App { val john = Worker( John ,  Sales ) val mike = john. copy(name= Mike )}Abstract case classWhen we declare an abstract case class, Scala won’t generate the apply method in the companion object, which makes sense as we can’t create an instance of an abstract class.  abstract case class PositiveInt(value: Int)Case objectWe can also create case objects. Just like a regular object, a case object inherits all the features of a regular object. Note that a case object is serialisable by default, whereas a regular object is not.  case object Fruit {  val costPerKg = 10}We must extend the Serializable trait in order to make a case object serialisable. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});