var x = [0, 3216, 3401, 4800, 3556, 4501, 3947, 4166, 4360, 3775, 4021, 4820, 4854, 4725, 3304, 3316, 3203, 3946, 3939, 3610, 3920, 4023, 4211, 3879, 3105, 3704, 4694, 3317, 3379, 3222, 4143, 4222, 4769, 4239, 3211, 4530, 4767, 3949, 3922, 4647, 3712, 3802, 3392, 4903, 3343, 3990, 3299, 4189, 4043, 4534, 4251, 4906, 4179, 3402, 4220, 4617, 4698, 4505, 4105, 3313, 3518, 3730, 3784, 4320, 4521, 4840, 4695, 3126, 3562, 3279, 3171, 3190, 4185, 3612, 4643, 4699, 3262, 4833, 4785, 4607, 4873, 4658, 3196, 4940, 4149, 3406, 4346, 3472, 3980, 3212, 4434, 4586, 4533, 3950, 4644, 4827, 4386, 4821, 4697, 4359, 3727, 4686, 3830, 3863, 3391, 3249, 4433, 4741, 3943, 4740, 3147, 4037, 4257, 3397, 4551, 4192, 4024, 3166, 4578, 4175, 4823, 3889, 4298, 4061, 3648, 3504, 3522, 4774, 3144, 4610, 3790, 4218, 3850, 4048, 3241, 4517, 4397, 4776, 4913, 3525, 4593, 4468, 4580, 4787, 3247, 3481, 4096, 3903, 3270, 4628, 3804, 3694, 3978, 4478, 4369, 4290, 3378, 4013, 4278, 4919, 4672, 4198, 3585, 3886, 4881, 4033, 3806, 3148, 4327, 4665, 4601, 4835, 3454, 3521, 4269, 3883, 3167, 4417, 3731, 4877, 4914, 3827, 3864, 4597, 3957, 4142, 4898, 4742, 3245, 4513, 3780, 3260, 4570, 3514, 3492, 3442, 3127, 4112, 3893, 3549, 4395];
for (let i = 1; i <= 200; i++) {
    const d = new Date();
    var date = d.getUTCDate();
    var day = d.getUTCDay() + 1;
    var year = d.getUTCFullYear();
    var month = d.getUTCMonth() + 1;
    var hour = d.getUTCHours();
    var min = d.getMinutes() + 1;
    if (min < 180) {
        min = 1;
    } else {
        min = 2;
    }
    var xx = day + year * month * date;
    xx = Math.pow(xx, hour * min);
    xx = xx * x[i];
    // xx = xx * 2 - 1;
    // xx = xx/2;

    if (i == 2 || i == 91 || i == 33 || i == 22 || i == 21 || i == 24) {
        xx = xx % 27;
        xx += 63;
    } else {
        xx = xx % 76;
        xx += 17;
    }
    const as = "percent-bar-" + i;
    const asd = "percent-txt-" + i;
    var percentTxt = document.getElementById("percent-txt-" + i);
    var bar = document.getElementById("percent-bar-" + i);
    const bartext = document.getElementById("card-title" + i);
    percentTxt.innerHTML = xx + "%";
    $("#percent-bar-" + i)
        .attr("aria-valuenow", xx)
        .css("width", xx + "%");
    if (xx < 60) {
        bar.classList.replace("yellow","red");
        bar.classList.replace("green","red");
    } else if (xx > 69) {
        bar.classList.replace("yellow","green");
        bar.classList.replace("red","green");
    } else {
        bar.classList.replace("red","yellow");
        bar.classList.replace("green","yellow");
    }
}