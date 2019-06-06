<template>
    <div>
        <el-row>
            <el-alert
                title="请注意相应字段的字段约束哟(＾Ｕ＾)ノ~ＹＯ"
                type="warning">
            </el-alert>
        </el-row>
        <el-row>
            <el-input
            type="text"
            placeholder="请输入标题，为了更好的显示效果，建议标题字数在30个汉字以内"
            v-model="title"
            maxlength="30"
            show-word-limit
            >
            </el-input>
        </el-row>
        <el-row>
            <el-input
            type="textarea"
            placeholder="请输入描述，为了更好的显示效果，建议描述字数在60个汉字以内"
            v-model="description"
            maxlength="60"
            show-word-limit
            >
            </el-input>
        </el-row>
        <el-row>
            <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-row>
        <el-row class="optBtn">
            <el-button type="danger">发布</el-button>
            <el-button type="danger" plain>保存草稿</el-button>
        </el-row>
    </div>
</template>
<script>

export default {
    data() {
        return {
            description: '',
            title: '',
            imageUrl: ''
        };
    },
    components: {
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
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
        }
    },
    computed: {
    },
    mounted() {
        
    }
};
</script>

<style lang="css">
  .content {
      margin-top: 20px;
  }
  .optBtn {
      margin-top: 40px;
      margin-bottom: 20px;
      text-align: center;
  }
  .optBtn .el-button {
      width: 98px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>