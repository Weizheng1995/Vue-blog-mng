<template>
    <div>
        <el-row>
            <el-alert title="搜索标题以及描述" type="warning"></el-alert>
        </el-row>
        <div style="margin-top: 15px;">
            <el-input placeholder="请输入关键词进行搜索" v-model="input2">
                <template slot="append">搜索</template>
            </el-input>
        </div>
        <el-row style="margin-top: 20px;">共<label style="color:red;">{{totalCount}}</label>条内容 <el-button type="danger" style="float:right;">上传图片</el-button></el-row>
        <el-row>
            <el-col :span="7" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0">
                <el-card :body-style="{ padding: '0px' }" style="margin-top: 10px;">
                    <el-image style=""
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    fit="scale-down"></el-image>
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <el-row><time class="time">{{ currentDate }}</time></el-row>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageHtml: 'page/album/album',
            input2: null,
            currentDate: '2019-04-28T02:18:38.605Z',
            currentPage3: 5,
            totalCount: 26
        };
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
};
</script>

<style lang="css">
  .el-image {
      display: block;
      margin: 0 auto;
  }
</style>