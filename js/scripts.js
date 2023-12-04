$(document).ready(function () {
    // Click event for the ENTER button on the title page
    $(".button-enter").on("click", function () {
        $("#titlePage").hide();
        $("#scene01").show();
        fadeInWithDelay("#prompt-01", 5);
        fadeInWithDelay("#prompt-01v2", 2);
        fadeInWithDelay("#prompt-01v3", 5);
        fadeInWithDelay("#button-back-01, #button-next-01", 75);
    });

    // BACK button on scene01
    $("#button-back-01").on("click", function () {
        $("#scene01").hide();
        $("#titlePage").show();
    });

    // NEXT button on scene01 leads to SCENE02
    $("#button-next-01").on("click", function () {
        $("#scene01").hide();
        $("#scene02").show();
        $("#storage-options").hide();
        $("#talk-opt").hide();
        $(".button-container").hide().fadeIn(2500);
    });

    // TALK button on scene02
    $("#button-talk").on("click", function () {
        $("#scene02 img").fadeOut(500, function () {
            $(this).attr("src", "imgs/fail-talk.gif").fadeIn(3000);
        });
        $("#prompt-02").hide();
        $("#gt").hide();
        fadeInWithDelay("#talk-opt", 7500);
        $("talk-opt").class("scene");
        fadeInWithDelay("#button-back-talk", 10000);
    });

    // BACK button on talk-opt
    $("#button-back-talk").on("click", function () {
        $("#scene02 img").attr("src", "imgs/angrymom.svg"); // Change image source back to angry mom
        $("#talk-opt").hide();
        $("#gt").hide();
        $("#prompt-02").show();
        $(".button-container").hide().fadeIn(2500);
    });

    // GT button on scene02
    $("#button-guilttrip").on("click", function () {
        $("#scene02 img").fadeOut(500, function () {
            $(this).attr("src", "imgs/gt.gif").fadeIn(3000);
        });
        $("#prompt-02").hide();
        $("#talk-opt").hide();
        fadeInWithDelay("#gt", 7500);
        fadeInWithDelay("#button-back-gt", 10000);
    });

    // BACK button on gt
    $("#button-back-gt").on("click", function () {
        $("#scene02 img").attr("src", "imgs/angrymom.svg"); // Change image source back to angry mom
        $("#talk-opt").hide();
        $("#gt").hide();
        $("#prompt-02").show();
        $(".button-container").hide().fadeIn(2500);
    });

    // STORAGE button on scene02 --- show the storage options -- 
    $("#button-storage").on("click", function () {
        $("#scene01").hide();
        $("#scene02").show();
        $("#prompt-02").hide();
        $("#storage-options").show();
        $("#button-sandok, #button-walis, #button-slippers, #button-back-store").hide().fadeIn(2500);
    });

    // slippers button --- scene03 start
    $("#button-slippers").on("click", function () {
        $("#scene02").hide();
        $("#prompt-02").hide();
        $("#talk-opt").hide();
        $("#gt").hide();
        $("#storage-options").hide();
        $("#prompt-bullseye").hide();
        fadeInWithDelay("#scene03", 500);
        fadeInWithDelay("#prompt-aim", 1000);

        $("#slippers-opt").load("imgs/mom_slippersaim.svg", function () {
            console.log("SVG loaded successfully");
        });
    });

    // Click event for the moon element
    $("#moon").on("click", function () {
        // Trigger image change to hitslippers-full.gif
        $("#layer-scene").attr("src", "hitslippers-full.gif");
        $("#prompt-aim").hide();
        fadeInWithDelay("#prompt-bullseye", 2000);
    });

    // Click event for the entire SVG
    $("#layer-scene").on("click", function (event) {
        if (!$(event.target).is("#moon")) {
            $("#layer-scene").attr("src", "drunkson.svg");
        }
    });

    // BACK button on slippers-opt
    $("#button-end-slip").on("click", function () {
        $(this).addClass("reset");
        $(".reset").on("click", function () {
            location.reload();
        })


        // BACK button on storage-options
        $("#button-back-store").on("click", function () {
            $("#scene02").show();
            $("#storage-options").hide();
            $("#prompt-02").show();
            $(".button-container").hide().fadeIn(2500);
        });

    });

    // Function to fade in with a delay
    function fadeInWithDelay(element, delay) {
        $(element).hide().delay(delay).fadeIn(1000);
    }

});
