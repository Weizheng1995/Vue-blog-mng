<template>
    <div style="margin-top: 20px;">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="昵称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <div class="block">
                    <el-slider
                    v-model="ruleForm.age"
                    show-input>
                    </el-slider>
                </div>
            </el-form-item>
            <el-form-item label="职位" prop="job">
                <el-input v-model="ruleForm.job"></el-input>
            </el-form-item>
            <el-form-item label="爱好" prop="hobby">
                <el-input v-model="ruleForm.hobby"></el-input>
            </el-form-item>
            <el-form-item label="头像" prop="logo">
                <el-row>
                    <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="ruleForm.logo" :src="ruleForm.logo" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-row>
            </el-form-item>
            <el-form-item label="签名" prop="sign">
                <el-input type="textarea" v-model="ruleForm.sign"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageHtml: 'page/mine/mine',
            ruleForm: {
                name: '',
                age: 18,
                logo: null,
                hobby: null,
                job: null,
                sign: null
            },
            rules: {
                name: [
                    { required: true, message: '请输入昵称', trigger: 'blur' },
                    { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                ],
                logo: [
                    { required: true, message: '请上传美美的头像哟', trigger: 'change' }
                ],
                hobby: [
                    { required: true, message: '请输入爱好信息', trigger: 'blur' },
                    { min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur' }
                ],
                job: [
                    { required: true, message: '请输入职位信息', trigger: 'blur' },
                    { min: 2, max: 5, message: '长度在 2 到 15 个字符', trigger: 'blur' }
                ],
                sign: [
                    { required: true, message: '请输入个性签名', trigger: 'blur' },
                    { min: 5, max: 30, message: '长度在 5 到 30 个字符', trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.ruleForm.logo = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>

<style lang="css">

</style>